window.watsonAssistantChatOptions = {
    integrationID: "6286cbfd-3b9b-49f9-8a29-bd10be8045d9", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "450140f6-61d5-446a-91d3-1dface431878", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
    };

/**
 * @function
 * @returns Chatbot (created by Liyuan Zhang) ready for integration with the rest of the website
 */
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
