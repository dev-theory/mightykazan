import { makeStyles, useTheme } from '@material-ui/core/styles'
import Section from '../Section'

export default function NomadsJoy(props) {
  return Section({
    ...props,
    id: 'item-1',
    title: "Nomad's ",
    title2: 'Joy',
    description: <>Treat yourself to the authentic <em><strong>plov</strong></em> of nomads prepared on the firewood in cast iron <em><strong>kazan</strong></em> with <em><strong>quality</strong></em> rice, carrots and lamb melting in your mouth</>,
    price: 13.99,
    servingSize: '350g',
  })
}
