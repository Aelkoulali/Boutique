import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

describe('Product componenet', () => {
    it('displays the product deatails correctly', () => {
        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: { stars: 4.5, count: 87 },   
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };

        const loadCart = vi.fn(); // Mock the loadCart function

        render(<Product product={product} loadCart={loadCart}/>);
        // Check if the product name is displayed
        expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();

        // Check if the product price is displayed correctly
        expect(screen.getByText("$10.90")).toBeInTheDocument();

        // Check if the product image is displayed with the correct src
        screen.getByTestId("product-image");
        expect(screen.getByTestId("product-image")).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg");

        // Check if the product rating stars image is displayed with the correct src
        expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute("src", "images/ratings/rating-45.png");

        // Check if the product rating count is displayed correctly
        expect(screen.getByTestId("product-rating-count")).toHaveTextContent("87");
    });
});