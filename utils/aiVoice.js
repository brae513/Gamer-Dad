const fs = require('fs');


function getVoice(message){
	const voice_id = 'pNInz6obpgDQGcFmaJgB' // Adam preset voice
	const response = fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`,
      {
        method: "POST",
        headers: {
          accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: message,
          voice_settings: {
            stability: 0,
            similarity_boost: 0,
          },
        }),
      }
    );
	const file = "TempFile.mp3";
	console.log(response)
	response.then((x) => {
		const arrayBuffer = x.arrayBuffer();
		arrayBuffer.then((arr) => {
			const buffer = Buffer.from(arr);
			

			fs.writeFile(`${file}.mp3`, buffer, () => {
			  console.log("File written successfully");
			});
		})
	})
	
	return `${file}.mp3`;
}


module.exports = {
	getVoice
};
