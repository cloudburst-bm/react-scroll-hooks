import React, { Component } from 'react'
import { number } from 'prop-types'

import style from './Field.css'
import Field from './Field'
import { withValidationAndTransition,
  commonPropTypes,
  commonDefaultProps } from '../hocs/withValidationAndTransition'

/**
 * Form Field that accepts text
 */
class ShortTextField extends Component {
  static propTypes = {
    ...commonPropTypes,
    maxLength: number,
  }

  static defaultProps = {
    ...commonDefaultProps,
    type: 'text',
    maxLength: 524288,
  }

  /**
   * Function to call when the user updates the value
   */
  onChange = ( { target: { value } } ) => {
    const { inputChange } = this.props
    inputChange( value )
  }

  render() {
    const { name,
      title,
      inputRef,
      containerRef,
      type,
      required,
      description,
      placeholder,
      maxLength,
      next,
      err } = this.props

    return (
      <Field
        title={title}
        description={description}
        next={next}
        err={err}
        required={required}
        containerRef={containerRef}
      >
        <input
          className={`textfield-input ${style.input}`}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={this.onChange}
          onKeyPress={( { key } ) => ( key === 'Enter' ? next() : null )}
          ref={inputRef}
          required={required}
          maxLength={maxLength}
        />
      </Field>
    )
  }
}

export default withValidationAndTransition( ShortTextField )
