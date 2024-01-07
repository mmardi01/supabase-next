const { exec } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const sourceProject = process.argv[2];
const targetProject = process.argv[3];

// Check arguments
if (!sourceProject || !targetProject) {
  console.error('Usage: node supabase-sync-schema.js [source_project] [target_project]');
  process.exit(1);
}

// Validate source and target projects
const validProjects = ['staging', 'production'];
if (!validProjects.includes(sourceProject)) {
  console.error(`Invalid source project: ${sourceProject}`);
  process.exit(1);
}

if (!validProjects.includes(targetProject)) {
  console.error(`Invalid target project: ${targetProject}`);
  process.exit(1);
}

// Set project IDs and passwords based on arguments
const sourceProjectId = sourceProject === 'staging' ? process.env.SUPABASE_STAGING_PROJECT_ID : process.env.SUPABASE_PRODUCTION_PROJECT_ID;
const sourceDbPassword = sourceProject === 'staging' ? process.env.SUPABASE_STAGING_DB_PASSWORD : process.env.SUPABASE_PRODUCTION_DB_PASSWORD;
const targetProjectId = targetProject === 'staging' ? process.env.SUPABASE_STAGING_PROJECT_ID : process.env.SUPABASE_PRODUCTION_PROJECT_ID;
const targetDbPassword = targetProject === 'staging' ? process.env.SUPABASE_STAGING_DB_PASSWORD : process.env.SUPABASE_PRODUCTION_DB_PASSWORD;



async function run() {
  try {
    console.log(`Linking source project: ${sourceProject}`);
    await execPromise(`npx supabase link --project-ref ${sourceProjectId} --password ${sourceDbPassword}`);

    console.log("Pulling database migrations");
    try {
      await execPromise(`npx supabase db pull`);
      console.log(`Migrations generated successfully from project ${sourceProjectId}!`);
    } catch ({ stderr }) {
      if (stderr && stderr.includes("no schema changes found")) {
        console.warn("No schema changes found. Continuing...");
      } else {
        throw new Error(stderr || "Failed to pull database migrations.");
      }
    }

    console.log(`Linking target project: ${targetProject}`);
    await execPromise(`npx supabase link --project-ref ${targetProjectId} --password ${targetDbPassword}`);

    console.log("Pushing database migrations");
    await execPromise(`npx supabase db push`);
    console.log(`Migrations applied successfully to project ${targetProjectId}!`);

    console.log("Generating TypeScript definitions");
    await execPromise(`npx supabase gen types typescript --project-id ${targetProjectId} --schema public > lib/database.types.ts`);
    console.log(`TypeScript definitions generated successfully from project ${targetProjectId}!`);

    console.log('Synchronization completed.');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

run();




function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        resolve(stdout);
      }
    });
  });
}