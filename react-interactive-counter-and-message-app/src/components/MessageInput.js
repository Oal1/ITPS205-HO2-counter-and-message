function MessageInput({ message, setMessage }) {
  return (
    <div className="box">
      <h2>Message Input</h2>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />

      <p>Live Message: {message}</p>
    </div>
  );
}

export default MessageInput;