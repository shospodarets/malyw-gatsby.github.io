import React from "react";
import Layout from "../components/layout"
import {Link} from "gatsby";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => (
    <Layout>
        <FontAwesomeIcon icon={faReact}/>
        <Link to="/">Back to main</Link>
    </Layout>
)

export default IndexPage
