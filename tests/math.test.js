const soma = require("../math.js");

test("deve somar 2 + 2 e retornar 4", () => {
  // Arrange (Organizar)
  const a = 2;
  const b = 2;

  // Act (Agir)
  const resultado = soma(a, b);

  // Assert (Verificar)
  expect(resultado).toBe(4);
});
