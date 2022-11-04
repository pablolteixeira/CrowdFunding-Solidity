import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout";


class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
        <Layout> 
            <div>
                <h3>Open Campaigns</h3>
                {this.renderCampaigns()}
                <Button
                    content="Create Campaign"
                    icon="add circle"
                    primary
                    />
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;