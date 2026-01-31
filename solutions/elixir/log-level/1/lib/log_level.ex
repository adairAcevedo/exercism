defmodule LogLevel do
  def to_label(level, legacy?) do
    codes = %{
      0 => %{value: false, log: :trace}, 
      1 => %{value: true, log: :debug}, 
      2 => %{value: true, log: :info}, 
      3 => %{value: true, log: :warning}, 
      4 => %{value: true, log: :error}, 
      5 => %{value: false, log: :fatal}
    }


    code_find = Map.filter(codes, fn {code, values} -> 
      if values.value do
        code === level
      else
        code === level and values.value === legacy? 
      end
    end)
    
    if !Map.equal?(code_find, %{}) do
      code_find[level].log
    else
      :unknown
    end
    
  end

  def alert_recipient(level, legacy?) do
    # Please implement the alert_recipient/2 function

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
