import './TextBlockV.scss';

function TextBlockV(props) {
    const listText = props.props;
    return(
      <div className='TextBlockV'>  
        <div className='TextBlockVMain'>
          
          {listText.map((text) => (  
            <div className='TextBlockVMainContent'> 
              <h2>{text.head}</h2>  
              <h3>{text.content}</h3>
            </div>  
          ))}
        </div>
      </div>
    )
}
export default TextBlockV;