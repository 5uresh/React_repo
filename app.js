const rHeading = React.createElement('h3',{id:'heading'},'This is from React')
const bind2 = ReactDOM.createRoot(document.getElementById('root'))



const parent = React.createElement('div',{id:'parents'}, 
    [
        React.createElement('div',{id:'childs'},[
            React.createElement('h2',{id:'childs'},'What s this'),
            React.createElement('h2',{id:'childs'},'What s this'),
        ]),
        React.createElement('div',{id:'childs'},[
            React.createElement('h2',{id:'childs'},'What s this'),
            React.createElement('h2',{id:'childs'},'What s this'),
        ])
    ]
    
)

bind2.render(parent)

