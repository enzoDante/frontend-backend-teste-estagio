const {createClient} = require('@supabase/supabase-js')

const PROJECT_URL = "https://fyrxtnbashpmuakjmqvm.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cnh0bmJhc2hwbXVha2ptcXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNzA0ODksImV4cCI6MTk5MjY0NjQ4OX0.Sp9_5SAfRU7u7nGnGfM818mFv0HN4nnqCBvlkDdUp8c"

const supabase = createClient(PROJECT_URL, PUBLIC_KEY)
module.exports = supabase