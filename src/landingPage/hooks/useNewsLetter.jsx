import { useState } from "react";

function useNewsLetter() {
  const [clientData, setClientData] = useState(undefined);

  const Send = async (data) => {
    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Message for Weekly News-letter",
          description: `Email: ${data.email}`,
        },
      ],
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_DISCORD_INTERGRATION_HOOK || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const responseData = { status: response.status };
      setClientData(responseData);

      if (response.status !== 204) {
        console.warn("Request did not return a 204 status.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return [Send, clientData];
}

export default useNewsLetter;
