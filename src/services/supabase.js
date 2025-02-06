import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wykreuyhjzlvsqynkzzw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5a3JldXloanpsdnNxeW5renp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjc4NzEsImV4cCI6MjA1MjcwMzg3MX0.EN8U0SgCx7VMwVuxtiAifV914lqVUKBaPqaScWJ0-Mw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
