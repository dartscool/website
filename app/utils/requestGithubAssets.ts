export interface Assets {
  url:                  string;
  id:                   number;
  node_id:              string;
  name:                 string;
  label:                null;
  uploader:             any;
  content_type:         string;
  state:                string;
  size:                 number;
  download_count:       number;
  created_at:           Date;
  updated_at:           Date;
  browser_download_url: string;
}

// Hardcoded for now instead of fetching the latest release
const PINNED_VERSION = "v1.17.0";

export async function requestGithubAssets(): Promise<Array<Assets>> {
  const apiURL = `https://api.github.com/repos/localsend/localsend/releases/tags/${PINNED_VERSION}`;
  return await fetch(apiURL, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json"
    }
  }).then((r) => {
    if (r.ok) return r.json().then(
      (data) => {
        return data["assets"]
      })
  })
}
