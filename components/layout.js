import { React } from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"


const Layout = props => {
    return (
        <Container>
            <div>
                <Header /> 
                {props.children}
            </div>
        </Container>
    );
}

export default Layout;