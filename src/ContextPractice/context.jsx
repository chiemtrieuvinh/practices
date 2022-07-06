import React from 'react'

const ThemeContext = React.createContext(null)
const PhotoContext = React.createContext(null)
const useThemeData = () => {
    const context = React.useContext(ThemeContext);
    if(context === undefined){
     throw new Error('Theme context must be wrapped in Provider')
    }
    return context
}
const usePhotosData = () => {
    const context = React.useContext(PhotoContext)
    if(context === undefined){
        throw new Error('Photo Context must be wrapped in PhotoProvider')
    }
    return context
}

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = React.useState('light')
    const [photos,setPhotos] = React.useState([])
    const getData = async () =>{
        setTimeout(() => {
            setPhotos(photos.concat('A'))
        },1000)
        // fetch(`https://randomuser.me/api/?results=${amount}`)
        // .then((res) => {
        //     return res.json();
        //   }).then(res => {
        //     return setPhotos(prevState => prevState.concat(res.data.results))
        //   }) 
        //   .catch((err) => console.log(err));
    }
   

  React.useEffect(() => {
    getData();
  }, []);

    const themeValue = {
        theme,
        setTheme
    }
    const photoValue = {
        photos,
        getData
    }
    return <ThemeContext.Provider value={themeValue}>
            <PhotoContext.Provider value={photoValue}>
                {
                    children
                }
            </PhotoContext.Provider>
          </ThemeContext.Provider>
}

export {
    ThemeProvider,
    useThemeData,
    usePhotosData,
    ThemeContext,
    PhotoContext
    }
// const ContentLayout = () => {
//     // const {theme,setTheme} = React.useContext(ThemeContext)
//     const {theme,setTheme} = useThemeData()
//     const handleChangeTheme = (currentTheme) => {
//        if(currentTheme === 'light'){
//         setTheme('dark')
//        }else{
//         setTheme('light')
//        }
//     }
//     return <div style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
//         <button onClick={() => handleChangeTheme(theme)}>Change Theme</button>
//         <h1 style={{color: theme !== 'light' ? 'white' : 'black'}}>Hello Context in {theme} mode</h1>
//     </div>
// }
// const ThemedLayout = () => {
//     return <ThemeProvider>
//         <ContentLayout/>
//     </ThemeProvider>
// }
// export default ThemedLayout