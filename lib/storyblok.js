import React, { useState } from "react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
	accessToken: process.env.STORYBLOK_API_KEY,
	cache: {
		clear: "auto",
		type: "memory",
	},
});

export function useStoryblok(originalStory, preview) {
	let [story, setStory] = useState(originalStory);

	// adds the events for updating the visual editor
	function initEventListeners() {
		const { StoryblokBridge } = window;
		if (typeof StoryblokBridge !== "undefined") {
			// initialize the bridge with your token
			const storyblokInstance = new StoryblokBridge();

			// reload on Next.js page on save or publish event in the Visual Editor
			storyblokInstance.on(["change", "published"], () => location.reload(true));

			// live update the story on input events
			storyblokInstance.on("input", (event) => {
				// check if the ids of the event and the passed story match
				if (story && event.story.content._uid === story.content._uid) {
					// change the story content through the setStory function
					setStory(event.story);
				}
			});

			storyblokInstance.on("enterEditmode", (event) => {
				// loading the draft version on initial enter of editor
				Storyblok.get(`cdn/stories/${event.storyId}`, {
					version: "draft",
				})
					.then(({ data }) => {
						if (data.story) {
							setStory(data.story);
						}
					})
					.catch((error) => {
						console.log(error);
					});
			});
		}
	}

	return story;
}

export default Storyblok;
