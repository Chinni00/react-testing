import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";


describe('Greeting Component',()=>{
    test('renders hello world as text',()=>{
        //arrange 
    render(<Greeting />)
    //act
    //nothing
    
    // assert
    const helloWorldElements = screen.getByText('hello world',{exact:false})
    expect(helloWorldElements).toBeInTheDocument()
    });
    test('renders good to see you if the button was NOT clicked',()=>{
        render(<Greeting />)
        // assert
    const outputElement = screen.getByText('its good to see',{exact:false})
    expect(outputElement).toBeInTheDocument()
    })
    test('renders changed! if the button was clicked',()=>{
      // Arrange
        render(<Greeting />)

      //Act
      const buttonElement = screen.getByRole('button')
      userEvent.click(buttonElement)

      // Assert 
      const outputElement = screen.getByText('changed!')
      expect(outputElement).toBeInTheDocument()

    })
})
