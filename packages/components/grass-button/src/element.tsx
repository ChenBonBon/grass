import { c, css } from "atomico";

function grassButton() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

grassButton.props = {
    myProp: String
};

grassButton.styles = css`
    :host {
        display: block;
    }
`;

export const GrassButton = c(grassButton);