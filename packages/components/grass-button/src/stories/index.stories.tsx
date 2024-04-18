import { GrassButton } from "@atomico/grass-button";
import { define } from "@atomico/storybook";

export default {
    title: "components/grass-button",
    ...define(
        GrassButton,
        { // Optional
            argTypes: {
                color: {
                    description: "Description..."
                }
            }
        }
)
};

export const Story = (props) =><GrassButton {...props}>Atomico!</GrassButton>;