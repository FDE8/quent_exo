export default function PageWithoutJSbasedForm() {
    return (
      <form action="/api/form" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
          <button type="Commencer">Submit</button>
      </form>
    )
  }
  