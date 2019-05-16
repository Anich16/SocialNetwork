import styled from "styled-components";

let PageButton = styled.button `
    border: 2px solid;
    padding: 5px;
    font-size: 16px;
    margin-right: 8px;
    font-weight: 800;
    
    background-color: ${props => props.selected ? "yellow" : "white"};
    border-color: ${props => props.selected ? "darkred" : "grey"}
    color: ${props => props.selected ? "darkred" : "black"};
    cursor: ${props => props.selected ? "default" : "pointer"};
    
    &:hover {
        background-color: ${props => props.selected ? "yellow" : "grey"};
        border-color: ${props => props.selected ? "darkred" : "black"}
    }
    
`;

export default PageButton;