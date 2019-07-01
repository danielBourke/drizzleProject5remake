import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";
import { Grid, Segment, Header } from "semantic-ui-react";
import logo from "./logo.png";
const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};
export default ({ accounts }) => (
  <div className="App">
    <h1>
      {" "}
      Token name:
      <ContractData contract="StarNotary" method="name" />
    </h1>Token symbol:
    <ContractData contract="StarNotary" method="symbol" />
<p>ERC-721 defines a minimum interface a smart contract must implement to allow unique tokens to be managed, owned, and traded. It does not mandate a standard for token metadata or restrict adding supplemental functions.</p>
    <Grid columns={2}>
      <Grid.Column>
        <Grid columns={2} doubling stackable>
          <Grid.Column>
            <Segment>
            <Header size='medium'>create a star</Header>
            <ContractForm
              contract="StarNotary"
              method="createStar"
              labels={[["Name of Star"], ["token Id"]]}
            />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <Header size='medium'>Put a star up for sale</Header>

              <ContractForm
                contract="StarNotary"
                method="putStarUpForSale"
                labels={[["token Id"], ["price"]]}
              />

            </Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <Grid columns={3} doubling stackable>
          <Grid.Column>
            <Segment>
            <Header size='medium'>Make payable</Header>

            
              <ContractForm
                contract="StarNotary"
                method="_make_payable"
                labels={[["New value"]]}
              />

              
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <Header size='medium'>Buy star</Header>

            <ContractForm
            contract="StarNotary"
            method="lookUptokenIdToStarInfo"
            labels={[["token id"]]}
          />

            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>

            <Header size='medium'>Look up star info</Header>

            <ContractForm
            contract="StarNotary"
            method="lookUptokenIdToStarInfo"
            labels={[["token id"]]}
          />
            
          <ContractData contract="StarNotary" method="lookUptokenIdToStarInfo" />

            
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment>
          
          <Header size='medium'>Exchange</Header>

          <ContractForm
          contract="StarNotary"
          method="exchangeStars"
          labels={[["to"],["token id"]]}
        />
          
          </Segment>
        </Grid.Column>
        <Grid.Column>
        <Segment>
        
        <Header size='medium'>Transfer</Header>

        <ContractForm
        contract="StarNotary"
        method="transferStar"
        labels={[["to"],["token id"]]}
      />
        
        </Segment>
      </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>


  </div>
);
