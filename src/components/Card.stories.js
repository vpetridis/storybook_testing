import React from "react"
import Card from "./Card"

export default {
  component: Card,
  title: "Card",
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  surname: "John",
}
