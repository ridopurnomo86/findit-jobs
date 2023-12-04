export type SearchMetadataType = {
  created_at: string;
  google_jobs_url: string;
  id: string;
  json_endpoint: string;
  processed_at: string;
  raw_html_file: string;
  status: string;
  total_time_taken: number;
};

export type SearchParametersType = {
  engine: string;
  gl: string;
  google_domain: string;
  hl: string;
  q: string;
};

export type JobResultType = {
  company_name: string;
  description: string;
  job_id: string;
  location: string;
  title: string;
  via: string;
  job_highlights: { title: string; items?: Array<string> };
  related_links: Array<{ link: string; text: string }>;
  extensions: Array<string>;
  detected_extensions: { posted_at: string; schedule_type: string };
  thumbnail: string;
};

export type ChipsType = {
  param: string;
  type: string;
  options: Array<{ text: string; value: string }>;
};

export type JobsApiTypes = {
  search_metadata: SearchMetadataType;
  search_parameters: SearchParametersType;
  jobs_results: Array<JobResultType>;
  chips: Array<ChipsType>;
};
