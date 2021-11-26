const ISS_BASE_URL = 'http://api.open-notify.org/iss-now.json';

export const getCurrentISSLocation = async () => {
    const response = await fetch(ISS_BASE_URL);
    const issResponse = await response.json();

    return issResponse;
}