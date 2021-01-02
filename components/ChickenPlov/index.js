import Section from '../Section'
import { useStyles } from './styles'

export default function ChickenPlov(props) {
  return Section({
    style: props.style,
    classes: useStyles(props),
    id: '2',
    title: 'Chick-n-',
    title2: 'Grains',
    description: <>This amazing Chicken <em><strong>Plov</strong></em> is prepared with firewood according to authentic traditions in a cast iron <em><strong>"Kazan"</strong></em> with <em><strong>quality</strong></em> rice, carrots and tender boneless chicken meat</>,
    price: 13.99,
    servingSize: '400g',
  })
}
