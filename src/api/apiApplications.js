import supabaseClient, { supabaseUrl } from "@/utils/supabase.js";

export async function applytoJob(token,_,jobData) {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`;

    const {error : storageError} = await supabase.storage
        .from("resumes")
        .upload(fileName, jobData.resume);

    if(storageError){
        console.log("Error Uploading Resume:", error);
        return null;
    }

    const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;

    const {data,error} = await supabase.from("applications").insert([{
        ...jobData,
        resume
    }]).select();

    if(error){
    console.log("Error Submitting Application:", error);
    return null;
    }   

    return data;
}

export async function updateApplicationStatus(token, { job_id }, status) {
    const supabase = await supabaseClient(token);

        const {data,error} = await supabase.from("applications").update({status}).eq("job_id",job_id).select();

        if(error || data.length === 0){
        console.log("Error Updating Application Status:", error);
        return null;
    }   

    return data;
}

export async function getApplications(token, { user_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("applications")
    .select("*, job:jobs(title, company:companies(name))")
    .eq("candidate_id", user_id);

  if (error) {
    console.error("Error fetching Applications:", error);
    return null;
  }

  return data;
}