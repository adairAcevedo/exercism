defmodule LogLevel do
  def to_label(level, legacy?) do
    cond do
      level === 0 and legacy? === false -> :trace
      level === 1 -> :debug
      level === 2 -> :info
      level === 3 -> :warning
      level === 4 -> :error
      level === 5 and legacy? === false -> :fatal
      true -> :unknown
    end
  end

  def alert_recipient(level, legacy?) do
    code = to_label(level, legacy?)
    cond do
      code in [:error, :fatal] ->
        :ops
      code === :unknown and legacy? === true ->
        :dev1
      code === :unknown ->
        :dev2
      true -> false
    end
  end
end
