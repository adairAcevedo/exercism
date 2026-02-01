defmodule GuessingGame do
  def compare(secret_number, guess) when is_integer(guess) and secret_number === guess, do: "Correct"


  def compare(secret_number, guess) when is_integer(guess) and secret_number > guess and secret_number-1 === guess, do: "So close"

  def compare(secret_number, guess) when is_integer(guess) and  guess > secret_number and guess-1 === secret_number, do: "So close"

  def compare(secret_number, guess) when is_integer(guess) and guess > secret_number, do: "Too high"
  def compare(secret_number, guess) when is_integer(guess) and secret_number > guess, do: "Too low"


  def compare(_secret_number, guess \\ :none), do: "Make a guess"
end
