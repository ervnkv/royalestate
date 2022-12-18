import './TextBlockH.scss';

function TextBlockH(props) {
    const listText = props.props;
    return(
      <div className='TextBlockH'>  
        <div className='TextBlockHMain'>
          
          {listText.map((text) => (  
            <div className='TextBlockHMainContent'> 
              <h2>{text.head}</h2>  
              <h3>{text.content}</h3>
            </div>  
          ))}
        </div>
      </div>
    )
}
export default TextBlockH;