# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Hooks
- normal JS utiliy function
- by the facebook it returns
- they have written inside react import

# how we can use it-
- two very imp hook (80-90% will be write this)

1) useState()  

- superpowerfull state variable in react. 
- useState() never create state variable outside of your component.
- It has a specific purpose it is used to create local state vriable inside our functional component.
- Try to call this hook on the top after create our component.
- Never create your state variable insie the if, else conditions, for loop and functions also, because this will create inconsistencies in your program.

2) useEffect()

- important point of useEffect() =
1 case:- If no dependency array useEffect is called on every render.
2 case:-If dependency array is empty then useEffect is called on  initial render(just once) 

- The default behaviour of useEffect is to be called after each render but if give it a dependency array it is just called after once.
 - What if we put something inside the dependency array?
    It will only be called when the dependency change. 
    example = If dependency is [btnName] => called everytime btnName is updated.


# Local state variable = super powerful variable
const [listOfRestaurant, setListOfRestaurant] = useState(food_list);

- array destructuring
- const arr = useState(food_list)
- const [listOfRestaurant, setListOfRestaurant] = arr;
- const listOfRestaurant = arr[0]
- const setListOfRestaurant = arr[1]

# In react we have two types of routing 
1) Client side routing
2) Server side routing


# React Strict Mode: 
If you're using React Strict Mode, it will intentionally re-render components to detect unexpected side effects. This can cause the componentDidMount method to be called twice.