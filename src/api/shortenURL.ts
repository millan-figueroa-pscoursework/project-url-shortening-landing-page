export async function shortenUrl(longUrl: string): Promise<string> {
    const formData = new FormData();
    formData.append("url", longUrl);

    const res = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
    }

    const data: { result_url?: string; error?: string } = await res.json();

    if (data.error) {
        throw new Error(data.error);
    }

    if (!data.result_url) {
        throw new Error("No result_url in response");
    }

    return data.result_url;
}