import App from "../App";
import renderer from 'react-test-renderer'
renderer

it('123',() => {
    const app = renderer.create(<App/>).toJSON()
    expect(app).toMatchSnapshot();
})
