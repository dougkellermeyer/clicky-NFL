import React, { Component } from 'react';
import Header from './components/Header'
import IconCard from './components/IconCard'
import './App.css'
import IconCard from './components/IconCard';



class App extends Component {
    state= {
        counter: 0,
        twitchGames:[
            {
                key: 1,
                name: "ryu",
                selected: false
            },
            {
                key: 2,
                name: "blanka",
                selected: false
            }
            ,
            {
                key: 3,
                name: "dhalsim",
                selected: false
            }
            ,
            {
                key: 4,
                name: "vega",
                selected: false
            }
            ,
            {
                key: 5,
                name: "mbison",
                selected: false
            }
            ,
            {
                key: 6,
                name: "balrog",
                selected: false
            }
            ,
            {
                key: 7,
                name:"sagat",
                selected: false
            }
            ,
            {
                key: 8,
                name: "chunli",
                selected: false
            },
            {

                key: 9,
                name: "zangief",
                selected: false
            },
            {
                key: 10,
                name: "guile",
                selected: false
            },
            {
                key: 11,
                name: "ehonda",
                selected: false
            },
            {
                key: 12,
                name: "ken",
                selected: false
            }

        ]
    };

    counterCheck=(name,selectedState)=>{
        let gamesArray = this.state.games;
        gamesArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            gamesArray.forEach(game=> game.selected = false);
            this.setState({games: gamesArray, counter: 0})
        } else {
            gamesArray.forEach((game) => {
                if (game.name === name && game.selected === false) {
                    game.selected = true;
                    this.setState({games: gamesArray, counter: this.state.counter + 1})
                }
            });
        }
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.games.map((game) => <IconCard  key={game.key} id ={game.key} character={game.name} selected={game.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;