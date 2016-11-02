import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>
          {messages.licenseMessage}
        </p>
      </section>
    )).toEqual(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section>
        <p>
           {messages.authorMessage}
        </p>
      </section>
    )).toEqual(true);
  });
});
