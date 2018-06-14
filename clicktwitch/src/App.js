import React, { Component } from 'react';
import Header from './components/Header'
import IconCard from './components/IconCard'
import './App.css'



class App extends Component {
    state= {
        counter: 0,
        skins:[
            {
                key: 1,
                name: "munitions",
                selected: false
            },
            {
                key: 2,
                name: "renegade",
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
                name: "recon",
                selected: false
            }
            ,
            {
                key: 5,
                name: "brawler",
                selected: false
            }
            ,
            {
                key: 6,
                name: "aerial",
                selected: false
            }
            ,
            {
                key: 7,
                name:"merru",
                selected: false
            }
            ,
            {
                key: 8,
                name: "alpine",
                selected: false
            },
            {

                key: 9,
                name: "circuit",
                selected: false
            },
            {
                key: 10,
                name: "reaper",
                selected: false
            },
            {
                key: 11,
                name: "bunny",
                selected: false
            },
            {
                key: 12,
                name: "skull",
                selected: false
            }

        ]
    };

    counterCheck=(name,selectedState)=>{
        let skinsArray = this.state.skins;
        skinsArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            skinsArray.forEach(skin=> skin.selected = false);
            this.setState({skins: skinsArray, counter: 0})
        } else {
            skinsArray.forEach((skin) => {
                if (skin.name === name && skin.selected === false) {
                    skin.selected = true;
                    this.setState({skins: skinsArray, counter: this.state.counter + 1})
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
                        {this.state.skins.map((skin) => <IconCard  key={skin.key} id ={skin.key} icon={skin.name} selected={skin.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;