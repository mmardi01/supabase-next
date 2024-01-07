const { execSync } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '.env.local') });

try {
  const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
  const output = execSync(`npx supabase gen types typescript --project-id ${projectId} --schema public > lib/database.types.ts`);
  console.log(output.toString());
  console.log(`TypeScript definitions generated successfully from project ${projectId}!`);
} catch (error) {
  console.error('Failed to generate TypeScript definitions:', error);
}
