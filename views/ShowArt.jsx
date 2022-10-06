const React = require('react')
const DefaultLayout = require("./layouts/DefaultLayout");

class ShowArt extends React.Component{
    render(){
        const {aart} = this.props
        // console.log(`Show Page ${aart}`)
        return(
            <DefaultLayout title='Art Details' nav='arts'>
                <div className='showcontainer'>
                    <h1>Details of {aart.title}</h1>
  {aart.image && aart.imageFullname && (
                    <img
                      src={`/uploads/images/${aart.imageFullname}`}
                      alt={aart.image}
                      className="showart-image"
                    ></img>
                  )}
                       <p>Artist: {aart.artist}</p>
                    <p>Price: ${aart.price}</p>
                    <p>Quantity:{aart.count}</p>
                    <p>Description: { aart.description}</p>
                    <div>
                    </div>
                    <div className='show-btn-container'>
                      <button className='all-btn'><a href={`/arts/${aart._id}/edit`}>Edit</a></button>

                      <form className='all-btn' action={`/arts/${aart._id}?_method=DELETE`} method='POST'>
                        <button className='show-del-btn' value='Delete'>Delete</button>
                      </form>

                      <button className='all-btn'><a href={`/arts/collection`}>Back</a></button>
                    </div>
                    </div>
            </DefaultLayout>
        )
    }
}
module.exports = ShowArt