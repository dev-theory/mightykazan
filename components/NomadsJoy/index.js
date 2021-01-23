import Section from "../Section"

export default function NomadsJoy(props) {
  return Section({
    style: props.style,
    id: "1",
    title: "Nomad's ",
    title2: "Joy",
    description: (
      <>
        Treat yourself to the authentic{" "}
        <em>
          <strong>"Plov"</strong>
        </em>{" "}
        of nomads prepared with firewood in a cast iron{" "}
        <em>
          <strong>"Kazan"</strong>
        </em>{" "}
        with{" "}
        <em>
          <strong>quality</strong>
        </em>{" "}
        rice, carrots and lamb melting in your mouth
      </>
    ),
  })
}
