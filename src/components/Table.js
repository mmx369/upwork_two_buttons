import { Input } from './Input'

export const Table = () => {
  return (
    <table>
      <tbody>
        <tr id='shortNameRow'>
          <td>
            <Input
              name='client_shortname'
              type='text'
              className='stretch'
              placeholder='Short Company Name'
            />
          </td>
        </tr>
        <tr>
          <td>
            <Input
              name='user_name'
              type='text'
              className='stretch'
              placeholder='User ID'
            />
          </td>
        </tr>
        <tr>
          <td>
            <Input
              name='user_pswd'
              type='password'
              className='stretch'
              placeholder='Password'
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
