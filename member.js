function skillsMember() {
  const member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node'],
  };

  return (
    <div>
      <h1>{member.name}</h1>
      <ul>
        {member.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}