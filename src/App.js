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
                name: "skin1",
                selected: false
            },
            {
                key: 2,
                name: "skin2",
                selected: false
            }
            ,
            {
                key: 3,
                name: "skin3",
                selected: false
            }
            ,
            {
                key: 4,
                name: "skin4",
                selected: false
            }
            ,
            {
                key: 5,
                name: "skin5",
                selected: false
            }
            ,
            {
                key: 6,
                name: "skin6",
                selected: false
            }
            ,
            {
                key: 7,
                name:"skin7",
                selected: false
            }
            ,
            {
                key: 8,
                name: "skin8",
                selected: false
            },
            {

                key: 9,
                name: "skin9",
                selected: false
            },
            {
                key: 10,
                name: "skin10",
                selected: false
            },
            {
                key: 11,
                name: "skin11",
                selected: false
            },
            {
                key: 12,
                name: "skin12",
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