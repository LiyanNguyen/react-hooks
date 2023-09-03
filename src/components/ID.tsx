import { useId } from "react"

const EmailForm = () => {
  // this id will be unique everytime this component is rendered
  const uniqueID = useId()
  // this is a better approach than random id generators when using SSR + CSR (in next.js)

  return (
    <>
      {/* by interpolating our unique ID this way, we can use the same useId() */}
      <label htmlFor={`${uniqueID}-email`}>Email</label>
      <input id={`${uniqueID}-email`} type="email" />
      <br />
      <label htmlFor={`${uniqueID}-name`}>Name</label>
      <input id={`${uniqueID}-name`} type="text" />

    </>
  )
}

// when you have a repeating component that needs unique id for HTML interaction
const ID = () => {
  return (
    <div style={{ maxWidth: 300 }}>
      <EmailForm />
      <article>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sunt animi vitae nobis reprehenderit! Earum voluptate tenetur, adipisci laboriosam magnam debitis expedita, itaque est officiis aperiam perspiciatis pariatur! Deserunt, eum?
      </article>
      <EmailForm />
    </div>
  )
}

export default ID