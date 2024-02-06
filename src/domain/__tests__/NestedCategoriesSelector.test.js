import { NestedCategoriesSelector } from "../../components/NestedCategoriesSelector";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('NestedCategoriesSelector', () => {
    it('categories without children', () => {

        const noParentComponents = [
            {
                "id": 1,
                "name": "Электроника",
            },
            {
                "id": 2,
                "name": "Одежда",
            },
            {
                "id": 3,
                "name": "Хобби",
            }
        ]

        render(<NestedCategoriesSelector data={noParentComponents} selectedIds={[]} setSelectedIds={() => { }} />);

        expect(screen.getAllByRole('checkbox')).toHaveLength(3);
    });
    it('category with two descendants', () => {
        const parentComponent = [
            {
                "id": 1,
                "name": "Электроника",
                "childrenIds": [2, 3]
            },
            {
                "id": 2,
                "name": "Телевизоры",
                "parentId": 1
            },
            {
                "id": 3,
                "name": "Холодильники",
                "parentId": 1
            }
        ]
        render(<NestedCategoriesSelector data={parentComponent} selectedIds={[]} setSelectedIds={() => { }} />);

        expect(screen.getAllByRole('checkbox')).toHaveLength(1);

    });
    it('parent and both descendants are shown', async () => {
        const parentComponent = [
            {
                "id": 1,
                "name": "Электроника",
                "childrenIds": [2, 3]
            },
            {
                "id": 2,
                "name": "Телевизоры",
                "parentId": 1
            },
            {
                "id": 3,
                "name": "Холодильники",
                "parentId": 1
            }
        ]

        const user = userEvent.setup()
        render(<NestedCategoriesSelector data={parentComponent} selectedIds={[]} setSelectedIds={() => { }} />);

        await user.click(screen.getByRole('button'))
        expect(screen.getAllByRole('checkbox')).toHaveLength(3);
        await user.click(screen.getByRole('button'))
        expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    });
    it('two ckeckboxes are checked', async () => {
        const parentComponent = [
            {
                "id": 1,
                "name": "Электроника",
                "childrenIds": [2, 3]
            },
            {
                "id": 2,
                "name": "Телевизоры",
                "parentId": 1
            },
            {
                "id": 3,
                "name": "Холодильники",
                "parentId": 1
            }
        ]

        const user = userEvent.setup()
        render(<NestedCategoriesSelector data={parentComponent} selectedIds={["1", "2", "3"]} setSelectedIds={() => { }} />);
        await user.click(screen.getByRole('button'))

        const checkboxes = screen.getAllByRole('checkbox');
        const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked)

        expect(checkedCheckboxes).toHaveLength(3);
    })
});