import React from 'react'
import {useThemeData,usePhotosData,ThemeProvider,ThemeContext,
    PhotoContext} from './context'

// const withThemeContext = Component => (props) => {
//         return  <ThemeContext.Consumer>
//         {
//          (theme) => {
//             return <PhotoContext.Consumer>
//                 {
//                     (photos) => {
//                         return <Component themeContext={theme} photosContext={photos} {...props}/>
//                     }
//                 }
//             </PhotoContext.Consumer>
//          }
//         }
//        </ThemeContext.Consumer>
//     }
// const useTheme = () => React.useContext(ThemeContext)
// const usePhotos = () => React.useContext(PhotoContext)
const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if(context === undefined){
     throw new Error('Theme context must be wrapped in Provider')
    }
    return context
}
const usePhotos = () => {
    const context = React.useContext(PhotoContext)
    if(context === undefined){
        throw new Error('Photo Context must be wrapped in PhotoProvider')
    }
    return context
}
const Layout1 = () => {
    // const {theme}= useTheme()
    // const {photos}= usePhotos()
    const {theme}=  React.useContext(ThemeContext)
    const {photos}= React.useContext(PhotoContext)

    return <div style={{color: theme !== 'light' ? 'white' : 'black'}}>Layout1 {theme}
    <div>
        <ul>
            {
                photos.map((item,index) => {
                    return <li key={`${item}-${index}`}>
                    {item}-{index}
                    </li>
                })
            }
        </ul>
    </div>
    </div>
}
const Layout2 = () => {
    // const {photos} = usePhotosData()
    // const {theme}= useThemeData()
    // const {theme}= useContextTheme()
    // return <div style={{color: theme !== 'light' ? 'white' : 'black'}}>Layout2 {theme}</div>
    // const {theme}= useTheme()
    // const {photos}= usePhotos()
    const {theme}=  React.useContext(ThemeContext)
    const {photos}= React.useContext(PhotoContext)
    console.log(photos,'check')
    return <div style={{color: theme !== 'light' ? 'white' : 'black'}}>Layout2 {theme}
    <div>
        <ul>
            {
                photos.map((item,index) => {
                    return <li key={`${item}-${index}`}>
                    {item}-{index}
                </li>
                })
            }
        </ul>
    </div>
    </div>
}

// const Wrapper = ({themeContext,photosContext}) =>{
const Wrapper = () =>{
    // const {photos,getData}= usePhotos()
    // const {theme,setTheme}= useTheme()
    // const {theme}= useTheme()
    // const {photos}= usePhotos()
    const {theme,setTheme}=  React.useContext(ThemeContext)
    const {photos,getData}= React.useContext(PhotoContext)
    const handleChangeTheme = (currentTheme) => {
               if(currentTheme === 'light'){
                setTheme('dark')
               }else{
                setTheme('light')
               }
            }
    const handleFetchData = async () => {
        try{
            await getData()
        }catch (error){
            console.log(error)
        }
    }
    return <div 
    style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}
    >
        <button onClick={() => handleChangeTheme(theme)}>Change Theme</button>
        <button onClick={handleFetchData}>Fetch new item</button>
        <Layout1/>
        <Layout2/>
    </div>
}
const MainLayout = () => {
   return <ThemeProvider>
        <Wrapper/>
   </ThemeProvider>
}
export default MainLayout
