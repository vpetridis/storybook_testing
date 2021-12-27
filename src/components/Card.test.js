import { render } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as CardStories from "./Card.stories"

const { Default } = composeStories(CardStories)

describe("Card", () => {
  it("should create a hello card msg", () => {
    const { container } = render(<Default />)
    expect(container.textContent).toEqual(
      "Hello John"
    )
  })
})
