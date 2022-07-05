


export async function createFinancialEvent (req, res) {
  const { value, type } = req.body;

  if (!value || !type) {
    return res.sendStatus(422);
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    return res.sendStatus(422);
  }

  if (value < 0) {
    return res.sendStatus(422);
  }
}