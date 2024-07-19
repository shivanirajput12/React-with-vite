import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count1:2,
      userInfo: {
        name: "sample name",
        location: "default",
        avatar_url: "/http://sample/avtar",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component Did Mount");
    //api call over here
    const data = await fetch("https://api.github.com/users/shivanirajput12");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("print time");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    //array destructuring
    // const { name, location, contact } = this.props;
    // const {count, count1} = this.state;
    console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-class">
        <img src={avatar_url} alt="" />
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        {/* <h2>Name - {this.props.name}</h2>
            <h3>Location - {this.props.location}</h3>
            <h4>Contact - {this.props.contact} </h4> */}
        {/* <h1>Count - {count}</h1> */}
        {/* <button onClick={()=>{
                //never update state variable directly
                // this.state.count = this.state.count+1
                //the way to pudate is:-

                this.setState({
                    count:this.state.count+1,
                    count1:this.state.count1+1,

                })
            }}>count increase</button> */}
        {/* <h1>Count - {count1}</h1> */}

        {/* <h4>Contact - {contact} </h4> */}
      </div>
    );
  }
}

export default UserClass;
