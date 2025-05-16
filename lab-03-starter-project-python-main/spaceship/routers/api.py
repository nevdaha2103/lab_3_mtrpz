from fastapi import APIRouter
import numpy as np

router = APIRouter()

@router.get("/matrix")
def multiply_matrices():
    matrix_a = np.random.rand(10, 10).tolist()
    matrix_b = np.random.rand(10, 10).tolist()
    product = np.dot(matrix_a, matrix_b).tolist()
    return {
        "matrix_a": matrix_a,
        "matrix_b": matrix_b,
        "product": product
    }